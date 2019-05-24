from invoices_merge import invoices_merge
import datetime

test_wb_1 = "invoices_test_1.xlsx"
test_wb_2 = "invoices_test_2.xlsx"
test_wb_master = "invoices_test_master.xlsx"

def test_invoices_merge():
    # create dictionary from master (blank) and file to merge
    dict_master = invoices_merge(test_wb_1, test_wb_master)

    # test merged customer dictionary
    assert len(dict_master["cust_dict"]) == 13
    assert dict_master["cust_dict"][1] == "Tiger Woods"
    assert ("Lorena Ochoa" in dict_master["cust_dict"].values()) == False
    assert ("Tommy Fleetwood" in dict_master["cust_dict"].values()) == False

    # test merged product dictionary
    assert len(dict_master["prod_dict"]) == 6
    assert dict_master["prod_dict"][1]["prod_name"] == "driver"
    assert dict_master["prod_dict"][1]["prod_cost"] == 500

    # test merged invoice dictionary
    assert len(dict_master["inv_dict"]) == 40
    assert dict_master["inv_dict"][1]["cust_id"] == 10
    assert dict_master["inv_dict"][1]["invoice_date"] == datetime.datetime(2019, 1, 1, 0, 0)
    assert len(dict_master["inv_dict"][1]["line_items"]) == 3
    assert dict_master["inv_dict"][1]["inv_total"] == 1900

    # test total of invoices after merge
    invoices_total = 0
    for item in dict_master["inv_dict"]:
        invoices_total += dict_master["inv_dict"][item]["inv_total"]
    assert invoices_total == 16800


    # merge another file (invoices_test_2.xlsx)
    # create dictionary from master (containing invoices_test_1.xlsx) and file to merge (invoices_test_2.xlsx))
    dict_master = {}
    dict_master = invoices_merge(test_wb_2, test_wb_master)

    # test merged customer dictionary
    assert len(dict_master["cust_dict"]) == 17
    assert dict_master["cust_dict"][1] == "Tiger Woods"
    assert dict_master["cust_dict"][15] == "Lorena Ochoa"

    # test merged product dictionary
    assert len(dict_master["prod_dict"]) == 7
    assert dict_master["prod_dict"][1]["prod_name"] == "driver"
    assert dict_master["prod_dict"][1]["prod_cost"] == 500

    assert dict_master["prod_dict"][7]["prod_name"] == "lesson"
    assert dict_master["prod_dict"][7]["prod_cost"] == 100

    # test merged invoice dictionary
    assert len(dict_master["inv_dict"]) == 80
    assert dict_master["inv_dict"][1]["cust_id"] == 10
    assert dict_master["inv_dict"][1]["invoice_date"] == datetime.datetime(2019, 1, 1, 0, 0)
    assert len(dict_master["inv_dict"][1]["line_items"]) == 3

    assert dict_master["inv_dict"][1]["inv_total"] == 1900
    assert dict_master["inv_dict"][41]["cust_id"] == 15
    assert dict_master["inv_dict"][41]["invoice_date"] == datetime.datetime(2019, 2, 1, 0, 0)
    assert len(dict_master["inv_dict"][41]["line_items"]) == 3
    assert dict_master["inv_dict"][41]["inv_total"] == 800

    # test total of invoices after second merge
    invoices_total = 0
    for item in dict_master["inv_dict"]:
        invoices_total += dict_master["inv_dict"][item]["inv_total"]
    assert invoices_total == 17500 + 16800



    # should have tested by reading data from file, not dictionaries (to make sure that data is being written correctly too)