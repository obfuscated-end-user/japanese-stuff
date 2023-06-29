import os
from tkinter import Tk

sample_text1 = "山菜、開会、都内、土車、仕業、旅券、内国、愛い、昨年、洋室、間接、単身、私説、植栽、植生、敬老、天生、兵器、高波、独裁的、黙り、ごみ袋、薩摩、背格好、選挙、外来語、鶲、獅子、坪、懇親、胴体、硝酸、塀、詠歌、畝織り、遵守、搾取、恒星、藩主、俸給、紳士、累積、謄本、抄本、虞美人草、斤量、匁、駒、朽ちる、朱印、厘毛、啓発、氾濫、佃煮、胎盤、陪審制、臼砲、繍帳、貂、猟虎、天竺鼠、象牙、鴨嘴、牡蠣、蜆、弗素、錫、水銀、窃盗犯、閑散、鎮痛剤、侯爵、妃殿下、宰相、嫡子、秩序、鵬翼、禰宜、麹黴、癩菌、真田虫、蛤、棘皮動物、家禽、甲殻類、蠕虫、刺胞動物、鰹の烏帽子、沖醤蝦、矮星、閏年、倫理学、形而上学、虚無主義、冥界、麗人、寸胴、別嬪、管弦楽団、縊死、弔花、夭逝、暗鬱、勿体、詮索、仔牛肉、簾戸、饗宴、旭日、柿、杮、坐剤、旺盛、閨閤、釉薬、圃場、肖像、鼎談、麿、裳階、櫻井鉱、廟堂、所詮"

# text = input("Enter Japanese words separated by \"、\": ")

def word_split1(text):
    """returns a word search thing for anki. fuck you."""
    return "\"front:re:(" + text.replace("、", "|") + ")\""

# doesn't work, utf-8 not supported, so it fucks up
def word_split2(text: str):
    """generates a word search thing for anki and puts it in your clipboard. fuck you."""
    command = "echo | set /p nul=" + "\"front:re:(" + text.replace("、", "|") + ")\"" + "| clip"
    os.system(command)
    print("Added expression to clipboard.")
    # text = "\"front:re:(" + text.replace("、", "|") + ")\""

# doesn't work
def word_split3(text: str):
    r = Tk()
    r.withdraw()
    r.clipboard_clear()
    r.clipboard_append("\"front:re:(" + text.replace("、", "|") + ")\"")
    r.update() # now it stays on the clipboard after the window is closed
    r.selection_get(selection = "CLIPBOARD")
    r.destroy()
    print("Added expression to clipboard.")

# doesn't work
def word_split4(text: str):
    win32clipboard.OpenClipboard()
    win32clipboard.EmptyClipboard()
    win32clipboard.SetClipboardText("\"front:re:(" + text.replace("、", "|") + ")\"")
    win32clipboard.CloseClipboard()
    print("Added expression to clipboard.")

def word_count(text: str):
    return len(text.split("、"))

print(word_split1(sample_text1), word_count(sample_text1))
# word_split1(sample_text1)
# print(word_split2(sample_text1))

""" def add_to_clipBoard(text):
    command = 'echo | set /p nul=' + text.strip() + '| clip'
    os.system(command) """