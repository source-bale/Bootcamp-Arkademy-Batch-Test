import re

def is_username_valid(username):
    abc = username[0]
    efg = re.search('[a-z]', abc)
    if(len(username)>=5):
        if(len(username)<=9):
            if re.search('[a-z]', username):
                if(efg):
                    print("True")
                else:
                    print("false")
            else:
                print("False")
        else:
            print("False")
    else:
        print("False")

def is_password_valid(password):
    if(len(password)>=8):
        if re.search('[A-Za-z0-9]', password):
            if re.search("[!@#$%^&*_+.,/();':=]", password):
                if re.search('[=]', password):
                    print("True")
                else:
                    print("False")
            else:
                print("False")
        else:
            print("False")
    else:
        print("False")
