import json
import os
import re

cwd = os.path.dirname(os.path.realpath(__file__))

kanji_list = json.load(open(cwd + "/kanji.json", encoding="utf8"))

print(len(kanji_list["learnedKanji"]))

sections = kanji_list.keys()
garbage = "[0-9A-Za-zぁ-んァ-ン々、。０-９Ａ-ｚ]"
valid_kanji = "[〆一-鿿㐀-䶿𠀀-𪛟𪜀-𫜹𫝀-𫠝𫠠-𬺡𬺰-𮯠𰀀-𱍊𱍐-𲎯豈-龎丽-𪘀]"

def add_kanji(kanji_string, section):
    if section in sections:
        added_kanji = []
        kanji_not_added = []
        kanji_string = re.sub(garbage, "", kanji_string)
        if re.match(valid_kanji, kanji_string):
            kanji_list_from_string = list(dict.fromkeys([char for char in kanji_string]))
            for kanji in kanji_list_from_string:
                if kanji in kanji_list[section]:
                    kanji_not_added.append(kanji)
                else:
                    added_kanji.append(kanji)
                    kanji_list[section] += kanji
        else:
            print("String contains non-kanji characters")
        if added_kanji:
            print(f"Added these kanji:\n{''.join(added_kanji)}")
        if kanji_not_added:
            print(f"Did not add these kanji:\n{''.join(kanji_not_added)}")
    else:
        print(f"Invalid section: \"{section}\"")

def remove_kanji(kanji_string, section):
    if section in sections:
        removed_kanji = []
        kanji_not_removed = []
        kanji_string = re.sub(garbage, "", kanji_string)
        if re.match(valid_kanji, kanji_string):
            kanji_list_from_string = list(dict.fromkeys([char for char in kanji_string]))
            for kanji in kanji_list_from_string:
                if kanji in kanji_list[section]:
                    removed_kanji.append(kanji)
                    kanji_list[section] = re.sub(f"[{kanji}]", "", kanji_list[section])
                else:
                    kanji_not_removed.append(kanji)
        else:
            print("String contains non-kanji characters")
        if removed_kanji:
            print(f"Removed these kanji:\n{''.join(removed_kanji)}")
        if kanji_not_removed:
            print(f"Did not remove these kanji:\n{''.join(kanji_not_removed)}")
    else:
        print(f"Invalid section: \"{section}\"")

def extract_kanji(text):
    added_kanji = []
    kanji_string = re.sub(garbage, "", text)
    if re.match(valid_kanji, kanji_string):
        kanji_list_from_string = list(dict.fromkeys([char for char in kanji_string]))
        for kanji in kanji_list_from_string:
            added_kanji.append(kanji)
    else:
        print("String contains non-kanji characters")
    if added_kanji:
        print(f"{''.join(added_kanji)}")

# remove_kanji("日本攜", "learnedKanji")
# extract_kanji("天気の良い日に、稲穂がいっせいに風になびいている景色は大変美しかった。")
add_kanji("煩悩、星霜、機嫌を取る、移駐、うろちょろ、華麗、狭義、浄瑠璃、偉業、燐光、添加、道理、条理、抄録、穐吉、寓意、赤檮、木苺、棄教、木蔦、極楽鳥花、棕櫚、水仙、黄楊、七竈、凌霄花、猫柳、鷂、蕗、芙蓉、光沢、茅葺、生い茂る、笹野、ほっぺ、沐浴", "learnedKanji")

# do not uncomment
""" out_file = open(cwd + "/python/kanji tools/test/test1.json", "w", encoding="utf-8") 
json.dump(kanji_list, out_file, indent=6, ensure_ascii=False) 
out_file.close() """