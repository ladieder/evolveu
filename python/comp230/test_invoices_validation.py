from invoices_validation import invoices_validation
import datetime

test_wb = "invoices_test_1.xlsx"

def test_invoices_validation():
    # create master dictionary
    data_dict = invoices_validation(test_wb)

    # test customer sub-dictionary
    assert len(data_dict["cust_dict"]) == 13
    assert data_dict["cust_dict"][1] == "Tiger Woods"
    assert ("Lorena Ochoa" in data_dict["cust_dict"].values()) == False
    assert ("Tommy Fleetwood" in data_dict["cust_dict"].values()) == False

    # test product sub-dictionary
    assert len(data_dict["prod_dict"]) == 6
    assert data_dict["prod_dict"][1]["prod_name"] == "driver"
    assert data_dict["prod_dict"][1]["prod_cost"] == 500

    # test invoice sub-dictionary
    assert len(data_dict["inv_dict"]) == 40
    assert data_dict["inv_dict"][1]["cust_id"] == 10
    assert data_dict["inv_dict"][1]["invoice_date"] == datetime.datetime(2019, 1, 1, 0, 0)
    assert len(data_dict["inv_dict"][1]["line_items"]) == 3
    assert data_dict["inv_dict"][1]["inv_total"] == 1900