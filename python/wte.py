"""
Wikipedia text extractor.
Limitations include not being able to parse articles with tables, lists, etc. correctly.
"""
import requests
import subprocess
import warnings
from urllib.parse import urlparse, unquote

warnings.filterwarnings("ignore", category=UserWarning)

HEADERS = {
	"User-Agent": "WikiTextExtractor/1.0 (contact: you@example.com)"
}

def ctc(text):
	p = subprocess.Popen(
		"clip",
		stdin=subprocess.PIPE,
		shell=True
	)
	p.communicate(text.encode("utf-16le"))


print(
	"Wikipedia text extractor.\n"
	"Enter \"quit\" to exit. Use exact article URLs for best results."
)

while True:
	url_or_title = input("\nEnter URL or title: ").strip()
	if url_or_title.lower() in ["quit", "exit", "q"]:
		break

	try:
		if "wikipedia.org" in url_or_title:
			parsed = urlparse(url_or_title)
			lang = parsed.netloc.split(".")[0]
			title = unquote(parsed.path.split("/")[-1]).replace("_", " ")
		else:
			lang, title = "en", url_or_title

		# https://www.mediawiki.org/wiki/API:Action_API
		# https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page
		api_url = f"https://{lang}.wikipedia.org/w/api.php"
		params = {
			"action": "query",
			"format": "json",
			"titles": title,
			"prop": "extracts",
			"explaintext": True,
			"exsectionformat": "plain",
			"redirects": 1
		}

		resp = requests.get(api_url, params=params, headers=HEADERS)

		# debug safety net (helps future you)
		if not resp.text.strip().startswith("{"):
			raise RuntimeError(f"Non-JSON response:\n{resp.text[:200]}")

		data = resp.json()
		page = next(iter(data["query"]["pages"].values()))

		if "missing" in page:
			print("Page not found. Try more specific title.")
		else:
			text = page.get("extract", "")
			ctc(text)
			print("\n" + "="*60)
			print(text[:1000] + ("..." if len(text) > 1000 else ""))
			print("="*60)

	except Exception as e:
		print(f"Error: {e}")
