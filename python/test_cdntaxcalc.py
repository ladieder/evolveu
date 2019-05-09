from cdntaxcalc import taxcalc

def test_taxcalc():
    assert taxcalc(-1) == "error"
    assert taxcalc(0) == 0
    assert taxcalc(10000) == 1500.00
    assert taxcalc(47630) == 7144.50
    assert taxcalc(50000) == 7630.35
    assert taxcalc(95259) == 7144.50 + 0.205 * (95259 - 47630)
    assert taxcalc(100000) == 18141.11
    assert taxcalc(147667) == 30534.53
    assert taxcalc(150000) == 31211.10
    assert taxcalc(210371) == 48718.69
    assert taxcalc(250000) == 61796.26