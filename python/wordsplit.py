import os
from tkinter import Tk

sample_text1 = "購入、入手、名称、表記、改める、コスタリカ、ニュージーランド、繁殖、発症、息切れ、嗅覚、水際、ベラルーシ、頭金、納期、選択肢、最短、在庫、調整中、転出届、ブーケ、遊覧船、公文書、復帰、国産、フロマージュ、管理局、支援策、給付、実費、渡航、国費留学生、経費、採取、浸水、大井、搬送、緩和、垂直尾翼、紛失、判明、診療、総会、過去最大、食品ロス、送金"

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