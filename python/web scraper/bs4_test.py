from bs4 import BeautifulSoup
import requests

""" 
resources:
https://www.crummy.com/software/BeautifulSoup/bs4/doc/
https://www.geeksforgeeks.org/beautifulsoup-nextsibling/
https://stackoverflow.com/questions/34111426/how-do-i-pull-p-tags-without-attributes-using-beautiful-soup - probably applies to any tag as well

loop all kanji from here
https://ja.wikipedia.org/wiki/%E8%A1%A8%E5%A4%96%E6%BC%A2%E5%AD%97%E5%AD%97%E4%BD%93%E8%A1%A8%E3%81%AE%E6%BC%A2%E5%AD%97%E4%B8%80%E8%A6%A7
hyougaiji = soup.find_all("a", class_="extiw")
kanji_string = ""
for kanji in hyougaiji:
    kanji_string += kanji.text
"""

word = "字"#input("Enter a Japanese word: ")
print("Preparing to get web page...")
# word = "ホールディングス"
source = requests.get(f"https://en.wiktionary.org/wiki/{word}#Japanese")
if source.ok:
    print("Get!")
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    """ match = soup.find('div', attrs={"class" : "mw-parser-output"}).prettify() """
    #match = soup.find("div", attrs={"class" : "mw-parser-output"}).ol.find_all("li")#.find("span", attrs={"class" : "mw-headline"})

    """ match = soup.find("div", attrs={"class" : "mw-parser-output"}).h2.find("span", attrs={"id":"Japanese"}) """

    """
    main goal is:
    find h2 tag with id of "Japanese"
    return all siblings below it until the next language section
    """
    # GET JAPANESE SECTION OF PAGE find("span", attrs={"id":"Japanese"}).
    # test if you can do this just by matching the text inside the tag (span with "Japanese" in it)
    """ matches = soup.find(soup.h2.span, id="Japanese").find_all_next("ol")

    for x in matches:
        if "Hanja" in x:
            x.text.strip("Hanja")
            break
        print(x.text)
        print("----") """
    border = "-"
    # match = soup.find("span", text="Japanese", class_="mw-headline").find_all_next()
    match1 = soup.find("span", {"id":"Japanese", "class":"mw-headline"}).text
    match2 = soup.find("h3").find("span", {"class":"mw-headline"}).find_next("h3").find_next("ol").text
    match3 = soup.find("span", {"id":"Japanese", "class":"mw-headline"}).find_all_next("h3")
    match4 = soup.find_all("span", {"lang":"ja"})
    match5 = soup.find_all("ol")
    match7 = soup.find("span", {"lang":"ja"}).find_all_next("ol")
    for match in match7:
        print(match.li, end=f"\n{border * 80}\n")
    
    """ # THIS DOES WHAT YOU'RE LOOKING FOR. IT LOOKS DEFINITIONS.
    match6 = soup.find("span", {"id":"Japanese", "class":"mw-headline"}).find_all_next("ol")#.find_next().find_next().find_next()
    for match in match6:
        print(match.li.text, end=f"\n{border * 80}\n") """
    """ border = "-"
    for match in match5:
        print(match.text, end=f"\n{border * 80}\n") """
    """ for match in match3:
        if match.find_next_sibling is soup.find("h3").find("span", {"id":"References", "class":"mw-headline"}):
            break
        else:
            print(match.find_next("ol").text) """
    """ for match in matches:
        print(match.find("span", id="Japanese")) """
        # match.find()
    #print(match)
    #for x in match:
    #    print(x.text)
    # print(match)
else:
    print(source)
# use soup.find_all("tag", attrs={"attribute" : "value"})

""" with open("E:\日本語を勉強するの物\python\web scraper\\test_website.html") as html_file:
    soup = BeautifulSoup(html_file, "html5lib")
    # print(soup.prettify())
    print(soup.find_all("span", attrs={"lang" : "ja"})) """