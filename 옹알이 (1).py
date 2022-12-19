def solution(babbling):
    count=0
    for i in range(len(babbling)):
        string = babbling[i].replace('aya','*')
        string = string.replace('ye','*')
        string = string.replace('woo','*')
        string = string.replace('ma','*')
        if string == '*' or string == '**' or string=='***' or string=='****':
            count+=1
        else:
            continue

    return count
