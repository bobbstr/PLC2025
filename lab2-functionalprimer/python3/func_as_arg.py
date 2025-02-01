def listFunc(x, y):
    return [i for i in range(x, y + 1)] #Create list of ints from 1 to 5, Haskell equivalent [1..5]

def applicatorFunc(inpFunc, s, x ,y):
    if s=='s':
        return sum(inpFunc(x , y))
    else:
        return sum(inpFunc(x , y))/(y - x + 1)

print(applicatorFunc(listFunc, 's', 1 , 10))