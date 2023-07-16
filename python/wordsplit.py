import os
from tkinter import Tk

sample_text1 = "盛岡、医療、内臓、国際原子力機関、海藻、役所、商事、世田谷、住友、アカミミガメ、日本石亀、ウェアラブル端末、横断歩道"

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
# word_split1(sample_text1)
# print(word_split2(sample_text1))

""" def add_to_clipBoard(text):
    command = 'echo | set /p nul=' + text.strip() + '| clip'
    os.system(command) """