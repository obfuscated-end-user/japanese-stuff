from random import choice
import unicodedata

def gen_char_list(start: str, end: str) -> list[str]:
	return [chr(c) for c in range(int(start, 16), int(end, 16) + 1)]
# if unicodedata.category(chr(c)) != "Cn"

# the only issues this has is that includes unassigned code points within a
# block, and unicodedata only supports to up a certain version
CJK_UNIFIED_IDEOGRAPHS = gen_char_list("0x4e00", "0x9fff")
CJK_EXTENSION_A = gen_char_list("0x3400", "0x4dbf")
CJK_EXTENSION_B = gen_char_list("0x20000", "0x2a6df")
CJK_EXTENSION_C = gen_char_list("0x2a700", "0x2b73f")
CJK_EXTENSION_D = gen_char_list("0x2b740", "0x2b81f")
CJK_EXTENSION_E = gen_char_list("0x2b820", "0x2ceaf") # unassigned: U+2CEAE–U+2CEAF
CJK_EXTENSION_F = gen_char_list("0x2ceb0", "0x2ebef") # unassigned: U+2EBE1–U+2EBEF
CJK_EXTENSION_G = gen_char_list("0x30000", "0x3134f") # unassigned: U+3134B–U+3134F
CJK_EXTENSION_H = gen_char_list("0x31350", "0x323af")
CJK_EXTENSION_I = gen_char_list("0x2ebf0", "0x2ee5f") # unassigned: U+2EE5E–U+2F7FF
CJK_EXTENSION_J = gen_char_list("0x323b0", "0x3347f") # unassigned: U+3347A–U+3347F

print(unicodedata.unidata_version)
print(len(
	CJK_UNIFIED_IDEOGRAPHS +
	CJK_EXTENSION_A +
	CJK_EXTENSION_B +
	CJK_EXTENSION_C +
	CJK_EXTENSION_D +
	CJK_EXTENSION_E +
	CJK_EXTENSION_F +
	CJK_EXTENSION_G +
	CJK_EXTENSION_H +
	CJK_EXTENSION_I +
	CJK_EXTENSION_J)
)
print(f"""
CJK_UNIFIED_IDEOGRAPHS: {len(CJK_UNIFIED_IDEOGRAPHS)}
CJK_EXTENSION_A: {len(CJK_EXTENSION_A)}
CJK_EXTENSION_B: {len(CJK_EXTENSION_B)}
CJK_EXTENSION_C: {len(CJK_EXTENSION_C)}
CJK_EXTENSION_D: {len(CJK_EXTENSION_D)}
CJK_EXTENSION_E: {len(CJK_EXTENSION_E)}
CJK_EXTENSION_F: {len(CJK_EXTENSION_F)}
CJK_EXTENSION_G: {len(CJK_EXTENSION_G)}
CJK_EXTENSION_H: {len(CJK_EXTENSION_H)}
CJK_EXTENSION_I: {len(CJK_EXTENSION_I)}
CJK_EXTENSION_J: {len(CJK_EXTENSION_J)}
""")

def random_kanji():
	return choice(
		CJK_UNIFIED_IDEOGRAPHS +
		CJK_EXTENSION_A +
		CJK_EXTENSION_B +
		CJK_EXTENSION_C +
		CJK_EXTENSION_D +
		CJK_EXTENSION_E +
		CJK_EXTENSION_F +
		CJK_EXTENSION_G +
		CJK_EXTENSION_H +
		CJK_EXTENSION_I +
		CJK_EXTENSION_J
	)

def concatenate_results(num):
	assert(num >= 1)
	results = ""
	for _ in range(num):
		results = results + random_kanji()
	return results

continue_generation = "y"
while continue_generation != "n":
	num = input("how many kanji: ")
	print(concatenate_results(int(num)))
	continue_generation = input(
		"n to exit, anything else to continue: "
	).lower()