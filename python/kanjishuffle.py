import random

kanji = input("enter string of kanji (ex. \"亘亙亞亥亦亮伶佑\"): ")
kanji_list = list(kanji)
random.shuffle(kanji_list)
kanji = "".join(kanji_list)

print(kanji)
input("enter if done ")