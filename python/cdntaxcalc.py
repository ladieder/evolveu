def taxcalc(income):
    if income < 0:
        return "error"
    elif income <= 47630:
        return 0.15 * income
    elif income <= 95259:
        return 7144.50 + 0.205 * (income - 47630)
    elif income <= 147667:
        return 16908.45 + 0.26 * (income - 95259)
    elif income <= 210371:
        return 30534.53 + 0.29 * (income - 147667)   
    else:
        return 48718.69 + 0.33 * (income - 210371)