from createemail import my_email

def test_createemail():
    assert my_email("larry", "shumlich") == "larry.shumlich@evolveu.ca"
    assert my_email("heiko", "peters") == "heiko.peters@evolveu.ca"