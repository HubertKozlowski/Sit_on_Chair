document.addEventListener("DOMContentLoaded", () => {

	var calculator = document.querySelector('.application .form');

	var arrowChairName = calculator.querySelector('#chairName .list_arrow');
	var chairNameSelect = calculator.querySelector('#chairName .list_label');
	var chairNameListPanel = calculator.querySelector('#chairName .list_panel');

	var arrowChairColor = calculator.querySelector('#chairColor .list_arrow');
	var chairColorSelect = calculator.querySelector('#chairColor .list_label');
	var chairColorListPanel = calculator.querySelector('#chairColor .list_panel');

	var arrowMaterial = calculator.querySelector('#chairMaterial .list_arrow');
	var chairMaterialSelect = calculator.querySelector('#chairMaterial .list_label');
	var chairMaterialListPanel = calculator.querySelector('#chairMaterial .list_panel');

	var checkboxClick = calculator.querySelector('.form-checkbox');
	var checkboxInput = calculator.querySelector('input[type=checkbox]');

	var summaryPanel = document.querySelector('.summary_panel');
	var panelLeft = summaryPanel.querySelector('.panel_left');
	var panelRight = summaryPanel.querySelector('.panel_right');

	var chairNameSummary = panelLeft.querySelector('.title');
	var chairPrice = panelRight.querySelector('.title');

	var chairColor = panelLeft.querySelector('.color');
	var chairColorPrice = panelRight.querySelector('.color');

	var chairMaterial = panelLeft.querySelector('.pattern');
	var chairMaterialPrice = panelRight.querySelector('.pattern');

	var transport = panelLeft.querySelector('.transport');
	var transportPrice = panelRight.querySelector('.transport');

	var totalPrice = summaryPanel.querySelector('.sum');

	var summaryChairPrice = 0;
	var summaryColorPrice = 0;
	var summaryMaterialPrice = 0;
	var summaryTransportPrice = 0;

	arrowChairName.addEventListener('click', function() {
			chairNameListPanel.classList.toggle('show_list');
			for (var i = 0; i < chairNameListPanel.children.length; i++) {
					chairNameListPanel.children[i].addEventListener('click', function() {
							chairNameSelect.innerHTML = this.innerHTML;
							chairNameSummary.innerHTML = this.innerHTML;
							chairPrice.innerHTML = this.dataset.chairPrice;
							summaryChairPrice = 0;
							summaryChairPrice = summaryChairPrice + parseInt(this.dataset.chairPrice);
							totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
							this.parentElement.classList.add('show_list');
					});
			}
	});

	arrowChairColor.addEventListener('click', function() {
		chairColorListPanel.classList.toggle('show_list');
			for (var i = 0; i < chairColorListPanel.children.length; i++) {
					chairColorListPanel.children[i].addEventListener('click', function() {
							chairColorSelect.innerHTML = this.innerHTML;
							chairColor.innerHTML = this.innerHTML;
							chairColorPrice.innerHTML = this.dataset.colorPrice;
							summaryColorPrice = 0;
							summaryColorPrice = summaryColorPrice + parseInt(this.dataset.colorPrice);
							totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
							this.parentElement.classList.add('show_list');
					});
			}
	});
	
	arrowMaterial.addEventListener('click', function() {
		chairMaterialListPanel.classList.toggle('show_list');
			for (var i = 0; i < chairMaterialListPanel.children.length; i++) {
					chairMaterialListPanel.children[i].addEventListener('click', function() {
							chairMaterialSelect.innerHTML = this.innerHTML;
							chairMaterial.innerHTML = this.innerHTML;
							chairMaterialPrice.innerHTML = this.dataset.patternPrice;
							summaryMaterialPrice = 0;
							summaryMaterialPrice = summaryMaterialPrice + parseInt(this.dataset.patternPrice);
							totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
							this.parentElement.classList.add('show_list');
					});
			}
	});

	checkboxClick.addEventListener('click', function() {

			if (checkboxInput.checked) {
					checkboxInput.checked = true
					transport.innerHTML = "Transport";
					transportPrice.innerHTML = checkboxInput.dataset.transportPrice;
					summaryTransportPrice = 0;
					summaryTransportPrice = summaryTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
					totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
			}	else {
					transport.innerHTML = "";
					transportPrice.innerHTML = "";
					summaryTransportPrice = 0;
					totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice;
			}
	});

})
