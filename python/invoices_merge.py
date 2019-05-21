from openpyxl import load_workbook
from invoices_validation import invoices_validation

# wbmerge = load_workbook('invoices.xlsx')
# wbmaster = load_workbook('invoices_master.xlsx')

def invoices_merge(wb_merge):
    dict_merge = invoices_validation(wb_merge)
    dict_master = invoices_validation('invoices_master.xlsx')

    print(dict_merge)
    print(dict_master)

    if dict_master["sheet_names"] != dict_merge["sheet_names"]:
        print("error - workbook sheet names do not match")
    else:
        pass

        # *** remember to filter out duplicates

        # merge customers

        # merge products

        # merge invoices


invoices_merge('invoices.xlsx')



# l = [[1, 2, 3], [2, 4, 5], [1, 2, 3], [2, 4, 5]]
# # s = set(tuple(i) for i in l)
# s = set()
# for i in l:
#     s.add(tuple(i))

# print(s)