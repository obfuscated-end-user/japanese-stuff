

with (
    # DO NOT UNCOMMENT
    # open('E:\日本語を勉強するの物\python\mese.txt', 'r', encoding="utf8") as f,
    # open("E:\日本語を勉強するの物\python\kanji tools\congee.txt", 'r', encoding="utf8") as r
    open("E:\日本語を勉強するの物\python\kanji tools\kanji (2023_01_22).txt", 'r', encoding="utf8") as r
    ):
    # results = 0
    with (
        open("E:\日本語を勉強するの物\python\kanji tools\\results.txt", 'w', encoding="utf8") as s
    ):
        # prints all kanji in one line
        for element in r:
            s.write(element[6])

        # print one kanji per line, separated by a newline
        """ for element in r:
            for kanji in element:
                s.write(kanji + '\n') """
    # print("\n")

    # r.write(results)

    print("Ran successfully.")