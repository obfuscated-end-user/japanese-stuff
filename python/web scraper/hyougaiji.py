from bs4 import BeautifulSoup
import requests

source = requests.get("https://ja.wikipedia.org/wiki/%E8%A1%A8%E5%A4%96%E6%BC%A2%E5%AD%97%E5%AD%97%E4%BD%93%E8%A1%A8%E3%81%AE%E6%BC%A2%E5%AD%97%E4%B8%80%E8%A6%A7")

if source.ok:
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    # find("table", class_="sortable wikitable jquery-tablesorter").tbody.tr.
    """ hyougaiji = soup.find("td", style="font-size:150%").find("a", class_="extiw")
    kanji_string = ""
    for kanji in hyougaiji:
        kanji_string += kanji.text
    print(kanji_string) """

    table = soup.find("table", class_="sortable")
    print(table)


else:
    print(source)