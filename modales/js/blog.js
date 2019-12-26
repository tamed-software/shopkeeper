function handleFormSubmit(ele) {
    var submitButton = ele.querySelector('input[type=submit]');
    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'loader');
    submitButton.setAttribute('disabled', true);
    submitButton.style.cursor = 'wait';
    submitButton.parentNode.appendChild(spinner);
    return true;
  }
  function resetSubmitButton(e){
    var submitButtons = e.target.form.getElementsByClassName('submit-button');
    for(var i=0;i<submitButtons.length;i++){
      submitButtons[i].disabled = false;
    }
  }
  function addChangeHandler(elements){
    for(var i=0; i<elements.length; i++){
      elements[i].addEventListener('change', resetSubmitButton);
    }
  }
  var form = document.getElementById('form65');
  addChangeHandler(form.getElementsByTagName('input'));
  addChangeHandler(form.getElementsByTagName('select'));
  addChangeHandler(form.getElementsByTagName('textarea'));
  var nodes = document.querySelectorAll('#form65 input[data-subscription]');
  if (nodes) {
    for (var i = 0, len = nodes.length; i < len; i++) {
      var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
      if(status ==='true') {
        nodes[i].checked = true;
      }
    }
  };
  var nodes = document.querySelectorAll('#form65 select[data-value]');
  if (nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var selectedValue = node.dataset ? node.dataset.value : node.getAttribute('data-value');
      if (selectedValue) {
        for (var j = 0; j < node.options.length; j++) {
          if(node.options[j].value === selectedValue) {
            node.options[j].selected = 'selected';
            break;
          }
        }
      }
    }
  }
  this.getParentElement = function(list) {
    return list[list.length-1].parentElement};
  var dom0 = document.querySelector('#form65 #fe435');
  var fe435 = new LiveValidation(dom0, {
    validMessage: "", onlyOnBlur: false, wait: 300}
                                );
  fe435.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }
    , failureMessage: "Este campo no debe contener URL's"}
           );
  fe435.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    }
    , failureMessage: "Este campo no debe contener HTML"}
           );
  fe435.add(Validate.Length, {
    tooShortMessage:"Sobrepasaste el nivel de caracteres", tooLongMessage: "Sobrepasaste el nivel de caracteres",  minimum: 0, maximum: 35}
           );
  fe435.add(Validate.Presence, {
    failureMessage:"Este campo es requerido"}
           );
  var dom1 = document.querySelector('#form65 #fe436');
  var fe436 = new LiveValidation(dom1, {
    validMessage: "", onlyOnBlur: false, wait: 300}
                                );
  fe436.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
    }
    , failureMessage: "Este campo no debe contener URL's"}
           );
  fe436.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    }
    , failureMessage: "Este campo no debe contener HTML"}
           );
  fe436.add(Validate.Length, {
    tooShortMessage:"Sobrepasaste el nivel de caracteres", tooLongMessage: "Sobrepasaste el nivel de caracteres",  minimum: 0, maximum: 35}
           );
  fe436.add(Validate.Presence, {
    failureMessage:"Este campo es requerido"}
           );
  var dom2 = document.querySelector('#form65 #fe429');
  var fe429 = new LiveValidation(dom2, {
    validMessage: "", onlyOnBlur: false, wait: 300}
                                );
  fe429.add(Validate.Format, {
    pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "Es requerido un email válido "}
           );
  fe429.add(Validate.Presence, {
    failureMessage:"Este campo es requerido"}
           );