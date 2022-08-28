import requests

r = requests.get('https://en.wiktionary.org/wiki/ホールディングス#Japanese')
# https://en.wiktionary.org/wiki/%E3%83%9B%E3%83%BC%E3%83%AB%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B9#Japanese will also work

if (r.ok):
    print(r.text)
else:
    print(r.status_code)