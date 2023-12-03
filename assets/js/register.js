function EnableDisableTextBox(ddlModels) {
    var selectedValue = ddlModels.options[ddlModels.selectedIndex].value;
    var txtOther = document.getElementById("txtOther");
    txtOther.disabled = selectedValue == 6 ? false : true;
    if (!txtOther.disabled) {
        txtOther.focus();
    }
}