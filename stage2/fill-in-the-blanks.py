#text and answers for the different levels

easy_text = '''A ___1___ is created with the def keyword. You specify the inputs a ___1___ takes by
adding ___2___ separated by commas between the parentheses. ___1___s by default return ___3___ if you
don't specify the value to return. ___2___ can be standard data types such as string, number, dictionary,
tuple, and ___4___ or can be more complicated such as objects and lambda functions.'''

easy_answers = ["function","arguments","none","list"]

medium_text = '''Gin is a ___1___ which derives its predominant flavour from juniper ___2___ (Juniperus communis).
From its earliest origins in the Middle Ages, gin has evolved from use in herbal medicine to an object of commerce
in the spirits industry. Gin was developed on the basis of the older jenever, and became popular in Great Britain
(particularly in London) when William of Orange, leader of the Dutch Republic, occupied the English, Scottish, and
___3___ thrones with his wife Mary. Gin is one of the broadest categories of ___1___s, represented by products of
various origins, styles, and ___4___ profiles that all revolve around juniper as a common ___5___.'''

medium_answers = ["spirit","berries","Irish","flavour","ingredient"]

hard_text = '''Floorball sticks are engineered for superior stickhandling, ball ___1___ and shooting. They are
___2___, inexpensive, durable and non-marking. A floorball stick should reach about two centimeters
above the belly ___3___ of the player. The official ball is 72 mm in diameter, weighs 23 g and is made of hard
___4___ with 26 evenly distributed holes, similar to a whiffle ball. A floorball ___5___ is 160 cm wide by 115 cm high,
similar to the size of a hockey ___5___. Floorball players do not wear any ___6___ equipment only a t-shirt,
shorts and athletic shoes are required. Players may wear protective eyewear but it is not mandatory.'''

hard_answers = ["control","lightweight","button","plastic","net","protective"]


# the player can choose from 3 different levels called easy, medium or hard.
def choose_level():
    level = raw_input("welcome to the fill-in-the-blanks game. please choose either easy, medium or hard as a level: ")
    print level
    if level == "easy":
        return easy_text, easy_answers
    if level == "medium":
        return medium_text,medium_answers
    if level == "hard":
        return hard_text,hard_answers
    else:
        print "this level does not exist, choose again"
        return choose_level()

#function to compare the players answer with the right answer. using the blank_number for the index of the answers list.
def check_answer(player_answer, answers, blank_number):
    if player_answer == answers[blank_number - 1]:
        return True
    else:
        return False

#the text gets checked for the pattern of the blanks.
#if there is a blank the user gets asked for its input. if the answer is correct the blank will be replaced.
#after 4 wrong answers for one blank the player loses.

def play_game():
    text, answers = choose_level()
    print text
    blank_number = 1
    blank = "___" + str(blank_number) + "___"
    wrong_answers = 0
    while blank in text:
        player_answer = raw_input("your answer for blank number " + str(blank_number) + ": ")
        if check_answer(player_answer,answers,blank_number) == True:
            print "correct"
            text = text.replace(blank,player_answer)
            blank_number += 1
            blank = "___" + str(blank_number) + "___" #update the blank
            wrong_answers = 0
            print text
        else:
            wrong_answers += 1
            if wrong_answers == 4:
                print "sorry you lost"
                return
            else:
                print "please try again"

    print "congrats! you won!!!!!!!!!!!"
    return

play_game()
