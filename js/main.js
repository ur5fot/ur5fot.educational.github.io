$(function () {
    var form = $('#form'),
        soundTrue = $('#true'),
        soundFalse = $('#false');

    setVAl();
    form.submit(function (e) {
        var result = +form.find('[name = first]').val() + +form.find('[name = last]').val(),
            otvet = +form.find('[name = result]').val();
        if (result === otvet) {
            //alert('верно');
            soundTrue.trigger('play');
            delResult();
            setVAl();
        } else {
            //alert('Не верно');
            soundFalse.trigger('play');
            delResult();
        }
        return false;
    });
    form.find('[name = result]').blur(function (e) {
        form.find('[name = result]').focus()
    });
    function setVAl() {
        form.find('[name = first]').val(randomInteger(1, 10));
        form.find('[name = last]').val(randomInteger(1, 10));
    }

    function delResult() {
        form.find('[name = result]').val('');
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
});