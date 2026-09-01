# DON'T DO THIS 😭

users = ["John", "Alice", "Bob"]

def find_user(name):
    for i in range(len(users)):
        if users[i].lower() == name.lower():
            return users[i]

    return None


while True:
    name = input("Enter username: ")

    if name == "":
        print("You entered nothing")
    else:
        user = find_user(name)

        if user != None:
            print("User found: " + user)
        else:
            print("User not found")

    again = input("Continue? ")

    if again == "no":
        break
