var dom0_0 = document.querySelector('#form63 #field0_0');
    var field0_0 = new LiveValidation(dom0_0, {
      validMessage: "", onlyOnBlur: false, wait: 300}
                                     );
    field0_0.add(Validate.Custom, {
      against: function(value) {
        return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
      }
      , failureMessage: "Este campo no debe contener URL's"}
                );
    field0_0.add(Validate.Custom, {
      against: function(value) {
        return !value.match(/(<([^>]+)>)/ig);
      }
      , failureMessage: "Este campo no debe contener HTML"}
                );
    field0_0.add(Validate.Length, {
      tooShortMessage:"Sobrepasaste el nivel de caracteres", tooLongMessage: "Sobrepasaste el nivel de caracteres",  minimum: 0, maximum: 35}
                );
    field0_0.add(Validate.Presence, {
      failureMessage:"Este campo es requerido"}
                );
    var dom0_1 = document.querySelector('#form63 #field0_1');
    var field0_1 = new LiveValidation(dom0_1, {
      validMessage: "", onlyOnBlur: false, wait: 300}
                                     );
    field0_1.add(Validate.Custom, {
      against: function(value) {
        return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i);
      }
      , failureMessage: "Este campo no debe contener URL's"}
                );
    field0_1.add(Validate.Custom, {
      against: function(value) {
        return !value.match(/(<([^>]+)>)/ig);
      }
      , failureMessage: "Este campo no debe contener HTML"}
                );
    field0_1.add(Validate.Length, {
      tooShortMessage:"Sobrepasaste el nivel de caracteres", tooLongMessage: "Sobrepasaste el nivel de caracteres",  minimum: 0, maximum: 35}
                );
    field0_1.add(Validate.Presence, {
      failureMessage:"Este campo es requerido"}
                );
    var dom1 = document.querySelector('#form63 #field1');
    var field1 = new LiveValidation(dom1, {
      validMessage: "", onlyOnBlur: false, wait: 300}
                                   );
    field1.add(Validate.Format, {
      pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "Es requerido un email válido "}
              );
    field1.add(Validate.Presence, {
      failureMessage:"Este campo es requerido"}
              );
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
    var form = document.getElementById('form63');
    addChangeHandler(form.getElementsByTagName('input'));
    addChangeHandler(form.getElementsByTagName('select'));
    addChangeHandler(form.getElementsByTagName('textarea'));
    var nodes = document.querySelectorAll('#form63 input[data-subscription]');
    if (nodes) {
      for (var i = 0, len = nodes.length; i < len; i++) {
        var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
        if(status ==='true') {
          nodes[i].checked = true;
        }
      }
    };
    var nodes = document.querySelectorAll('#form63 select[data-value]');
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