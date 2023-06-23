import os
from tkinter import Tk

sample_text1 = "勘弁、感無量、勧誘、関与、慣用、寛容、観覧、官僚、慣例、還暦、貫禄、外貨、外観、概説、該当、街頭、概略、学芸、学士、学説、楽譜、学歴、雅致、がっくり、がっしり、がっちり、眼球、願書、頑丈、岩石、元年、贋物、規格、着飾る、器官、季刊、気兼ね、気軽、聞き取り、効き目、帰京、棄権、喜劇、既婚、記載、気障、兆し、期日、記述、奇数、規制、汽船、寄贈、気立て、きちっと、きっかり、きっちり、きっぱり、規定、起点、規範、気品、気風、起伏、生真面目、決まり悪い、記名、脚色、脚本、客観、規約、救援、休学、究極、球根、救済、給仕、旧知、宮殿、窮乏、丘陵、驚異、教員、教科、共感、共学、協議、境遇、強行、強硬、凶作、教材、教習、郷愁、教職、享受、興じる、強制、協調、協定"

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