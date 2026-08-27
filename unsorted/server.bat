:: echo http://0.0.0.0:8000/seeblock.html

echo use ipconfig
echo http://localhost:8000/seeblock.html
echo http://192.168.1.8:8000/seeblock.html
python -m http.server 8000 --bind 0.0.0.0