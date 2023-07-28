import os
from tkinter import Tk

sample_text1 = "宮古島、群生、火葬、緊急避妊薬、子宮、薬剤師、那覇、トリチウム、祈念、展示、展覧会、有限、森田、拳次、医療用、消費電力、姫野、和樹、海岸、金森、塩ラーメン、サルモネラ、カンピロバクター、パールハーバー"

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

print(word_split1(sample_text1), "\n", word_count(sample_text1))
input("exit\n")
# word_split1(sample_text1)
# print(word_split2(sample_text1))

""" def add_to_clipBoard(text):
    command = 'echo | set /p nul=' + text.strip() + '| clip'
    os.system(command) """