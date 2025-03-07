import collections
import re

sample_text1 = "琴瑟相和、近親相姦、魑魅魍魎、百戦錬磨、躊躇逡巡、弩級戦艦、敬天愛人、作画崩壊、管弦楽団、疾風怒濤、棘皮動物、糶糴売買、戦災孤児、絶体絶命、慇懃無礼、七不思議、帝国主義、磊磊落落、体外離脱、閲覧注意、有耶無耶、航空母艦、阿鼻叫喚、天上天下、八紘一宇、自己矛盾、花鳥風月、跳梁跋扈、阿諛追従、鰥寡孤独、曖昧模糊"
kanji = "倪懼眄蟒臙閻侠龜沫驍牒瑞鍼灸俎鍮耽梁撞諮穂尉塑墾曹某殉窯艇帥迭卸畔丙輿膏鞠魯孟吻啄"
dupes = "ああ、ああ、あい、あお、ぞう、漢字、漢字"

# text=input("Enter Japanese words separated by \"、\": ")
def word_split1(text):
    """Returns a word search thing for Anki."""
    return "\"front:re:(" + text.replace("、", "|") + ")\""

def word_split2(text):
    """Same as above, but without the Anki stuff."""
    word_list = text.split("、")
    final = ""
    for word in word_list:
        if re.search("[々一-鿿㐀-䶿𠀀-𪛟𪜀-𫜹𫝀-𫠝𫠠-𬺡𬺰-𮯠𰀀-𱍊𱍐-𲎯０-９Ａ-ｚ]", word):
            final += word + "[<-]|"
        else:
            final += word + "|"
    final = re.sub("\|$", "", final)
    return "\"front:re:(" + final + ")\""

def word_split3(text):
    # "alt-forms">[A-Za-z0-9ぁ-んァ-ン一-鿿㐀-䶿𠀀-𪛟𪜀-𫜹𫝀-𫠝𫠠-𬺡𬺰-𮯠𰀀-𱍊𱍐-𲎯０-９Ａ-ｚ、「」]*</span>
    return "\"back:re:(.alt-forms.>|、)(" + text.replace("、", "|") + ")\""

def separate_kanji(text: str):
    result = ""
    for char in text:
        result = result + char + "、"
    result = result[:-1]
    return result

def word_count(text: str):
    return len(text.split("、"))

def find_duplicates(text: str):
    result = ""
    duplicates = [item for item, count in collections.Counter(text.split("、")).items() if count > 1]
    for term in duplicates:
        result += term  + "、"
    result = result[:-1]
    return result

def separate_kanji(text: str):
    result = ""
    for char in text:
        result = result + char + "、"
    result = result[:-1]
    return result


text1=word_split1(sample_text1)
text2=word_split2(sample_text1)
text3=word_split3(sample_text1)
with open("python\output.txt", "w", encoding="utf-8") as out:
    text=text2
    out.writelines(f"regex:\n{text2[11:-2]}\nanki regex:\n{text2}\nalt-forms:\n{text3}\nword count: {word_count(sample_text1)}\nseparated kanji:\n{separate_kanji(kanji)}\nduplicate words:\n{find_duplicates(dupes)}")
    print("done!")
