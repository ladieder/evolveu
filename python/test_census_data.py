from census_data import census_data

def test_census_data():
    census_list = census_data("CLASS", "SECTOR", "RES_CNT")
    class_dict = census_list[0]
    sector_dict = census_list[1]
    assert class_dict["Residential"] == 1263734
    assert class_dict["Major Park"] == 0
    assert sector_dict["SOUTH"] == 227421
    assert sector_dict["EAST"] == 58405
    assert sum(class_dict.values()) == sum(sector_dict.values())
