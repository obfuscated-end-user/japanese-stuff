import requests
import http.server
import socketserver
import urllib.parse
from urllib.parse import quote
from html import escape

PORT = 8000

CATEGORIES = sorted([
	"CJK_Unified_Ideographs_block",
	"CJK_Unified_Ideographs_Extension_A_block", 
	"CJK_Unified_Ideographs_Extension_B_block",
	"CJK_Unified_Ideographs_Extension_C_block",
	"CJK_Unified_Ideographs_Extension_D_block",
	"CJK_Unified_Ideographs_Extension_E_block",
	"CJK_Unified_Ideographs_Extension_F_block",
	"CJK_Unified_Ideographs_Extension_G_block",
	"CJK_Unified_Ideographs_Extension_H_block",
	"CJK_Unified_Ideographs_Extension_I_block",
	"CJK_Unified_Ideographs_Extension_J_block",
	"Ghost_kanji",
	"Han_script_characters",
	"Han_script_characters_containing_loop_strokes",
	"Japanese-coined_CJKV_characters",
	"Japanese-only_CJKV_Characters",
	"Japanese_hyōgai_kanji",
	"Japanese_terms_spelled_with_hyōgai_kanji",
	"Japanese_terms_spelled_with_jinmeiyō_kanji",
	"Japanese_yojijukugo",
	"Terms_containing_unencoded_characters",
	"Vietnamese_Han_characters",
	"Zhuang_Sawndip_forms",
])

class WiktionaryHandler(http.server.BaseHTTPRequestHandler):
	def do_GET(self):
		# to-do: deal more than 500 entries, something something pagination
		parsed_path = urllib.parse.urlparse(self.path).path
		query_params = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)

		if parsed_path == "/" or parsed_path == "/index.html":
			self.send_response(200)
			self.send_header("Content-Type", "text/html; charset=utf-8")
			self.end_headers()
			html_content = self.generate_main_html()
			self.wfile.write(html_content.encode('utf-8'))
		elif parsed_path == "/fetch":
			category = query_params.get("category", [CATEGORIES[0]])[0]
			limit = min(int(query_params.get("limit", [10])[0]), 500)
			self.send_response(200)
			self.send_header("Content-Type:", "text/html; charset=utf-8")
			self.end_headers()
			entries = self.fetch_api_data(category, limit)
			html_content = self.generate_results_html(entries, category, limit)
			self.wfile.write(html_content.encode("utf-8"))
		else:
			self.send_response(404)
			self.end_headers()

	def fetch_api_data(self, category, limit):
		url = "https://en.wiktionary.org/w/api.php"
		params = {
			"action": "query",
			"list": "categorymembers",
			"cmtitle": f"Category:{category}",
			"cmprop": "title|timestamp",
			"cmlimit": str(limit),
			"cmsort": "timestamp",
			"cmdir": "desc",
			"format": "json"
		}
		headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
		}

		try:
			print(f"Fetching {limit} from {category}")
			response = requests.get(url, params=params, headers=headers, timeout=10)
			print(f"Status: {response.status_code}")

			response.raise_for_status()
			data = response.json()
			entries = data.get("query", {}).get("categorymembers", [])
			print(f"Loaded {len(entries)} entries")
			return entries
		except Exception as e:
			print(f"Error: {e}")
			return [{"title": "API Error", "error": str(e)}]

	def generate_api_url(self, category, limit):
		"""Generate the exact API URL for copying"""
		params = {
			"action": "query",
			"list": "categorymembers",
			"cmtitle": f"Category:{category}",
			"cmprop": "title|timestamp",
			"cmlimit": str(limit),
			"cmsort": "timestamp",
			"cmdir": "desc"
		}
		return "https://en.wiktionary.org/w/api.php?" + urllib.parse.urlencode(params)

	def generate_main_html(self):
		options = "".join([f'<option value="{cat}">{cat.replace("_", " ")}</option>' for cat in CATEGORIES])

		return f"""<!DOCTYPE html>
<html>
<head>
	<title>Wiktionary Category Tool</title>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Wiktionary Category Tool</h1>
	<div>
		<select id="category">
			<option value="">Select category...</option>
			{options}
		</select>
		<input type="number" id="limit" value="10" min="1" max="500" style="width:80px">
		<button onclick="fetchData()">Fetch</button>
	</div>

	<div id="results" style="margin-top:20px">
		Select category and click Fetch
	</div>
	<script>
	function fetchData() {{
		const category = document.getElementById('category').value;
		const limit = document.getElementById('limit').value;
		if (!category) {{ alert('Select a category'); return; }}
		window.location.href = `/fetch?category=${{encodeURIComponent(category)}}&limit=${{limit}}`;
	}}
	</script>
</body>
</html>"""

	def generate_results_html(self, entries, category, limit):
		options = "".join([f'<option value="{cat}" {"selected" if cat == category else ""}>{cat.replace("_", " ")}</option>' for cat in CATEGORIES])
		api_url = self.generate_api_url(category, limit)
		entries_html = ""
		col_width = 20
		# create 5 columns
		for col in range(5):
			entries_html += f'<div style="float:left;width:{col_width}%;padding:10px;box-sizing:border-box;">'
			# add entries for this column (every 5th entry)
			for i, entry in enumerate(entries):
				if i % 5 == col:	# this entry belongs to this column
					title = entry.get("title", "Unknown")
					if entry.get("error"):
						entries_html += f'<div style="border-left:4px solid red;padding:10px;margin:10px 0"><b>{escape(title)}</b><br><small>Error: {escape(entry["error"])}</small></div>'
					else:
						link = f"https://en.wiktionary.org/wiki/{quote(title)}"
						entries_html += f'<div style="border-left:4px solid blue;padding:10px;margin:10px 0"><a href="{link}" target="_blank" style="text-decoration:none;"><b style="font-size:20px">{escape(title)}</b></a><br><small>{entry.get("timestamp", "N/A")[:10]}</small></div>'
			entries_html += "</div>"
		entries_html += '<div style="clear:both"></div>'

		return f"""<!DOCTYPE html>
<html>
<head>
	<title>{category} - {len(entries)} results</title>
	<meta charset="UTF-8">
</head>
<body>
	<h1><a href="/">Back</a> | {category.replace("_", " ")}</h1>
	<div>
		<select id="category" onchange="changeCategory()">
			{options}
		</select>
		<input type="number" id="limit" value="{limit}" min="1" max="500" onchange="refetch()" style="width:80px">
		<button onclick="copyApiUrl()">Copy API URL</button>
		<button onclick="fetchMax()">Max 500</button>
		<button onclick="refetch()">Refresh</button>
	</div>
	<h2>{len(entries)} entries found ({limit} requested)</h2>
	<div style="overflow:auto;">
		{entries_html}
	</div>
	<script>
	const apiUrl = `{api_url}`;
	function copyApiUrl() {{
		navigator.clipboard.writeText(apiUrl).then(function() {{
			alert('API URL copied to clipboard!');
		}}, function(err) {{
			const textArea = document.createElement("textarea");
			textArea.value = apiUrl;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			alert('API URL copied to clipboard!');
		}});
	}}
	function changeCategory() {{
		const category = document.getElementById('category').value;
		const limit = document.getElementById('limit').value;
		window.location.href = `/fetch?category=${{encodeURIComponent(category)}}&limit=${{limit}}`;
	}}
	function refetch() {{
		const category = document.getElementById('category').value;
		const limit = document.getElementById('limit').value;
		window.location.href = `/fetch?category=${{encodeURIComponent(category)}}&limit=${{limit}}`;
	}}
	function fetchMax() {{
		document.getElementById('limit').value = '500';
		refetch();
	}}
	</script>
</body>
</html>"""


if __name__ == "__main__":
	print("go to http://localhost:8000")
	print("press ctrl+c to stop")

	with socketserver.TCPServer(("", PORT), WiktionaryHandler) as httpd:
		httpd.serve_forever()
