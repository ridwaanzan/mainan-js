
        var rowNum = 1;
        var itemNum = 1;

        $('body').on('click', '#add-task', function(data) {
            var namaTask = $('#namaTask').val();

            $('#task-lihat').append('<div class="col-xs-12 col-lg-4" id="taskPanel-'+rowNum+'"><div class="panel panel-default" id="mon-'+rowNum+'"><div class="panel-heading">'+namaTask+'<button class="close" id="panelColse" value="'+rowNum+'">x</button></div><div class="panel-body" id="listItem"><div id="isiItem-'+rowNum+'"></div></div><div class="panel-footer"><input type="text" name="namaItem" id="namaItem-'+rowNum+'" placeholder="add item for '+namaTask+'"><button class="btn btn-primary" id="addItem" name="addItem" value="'+rowNum+'">Add</button></div></div><div></div>');

            $('#namaTask').val('');
            $('#namaTask').focus('');

            rowNum++;
        });

        $('body').on('click', '#addItem', function() {

            itemNum++;

            var rowId     = $(this).val();
            var namaItem  = $('#namaItem-'+rowId).val();

            $('#isiItem-'+rowId).append('<div id="itemi-'+itemNum+'"><div class="col-xs-8">'+namaItem+'</div><div class="col-xs-3"><button id="delItem" value="'+itemNum+'">remove</button></div></div>');
            $('#namaItem-'+rowId).val('');
            $('#namaItem-'+rowId).focus();

        });

        $('body').on('click', '#delItem', function(){
            var items = $(this).val();
            $('#itemi-'+items).remove();
        });

        $('body').on('click', '#panelColse', function(){
            var items = $(this).val();
            $('#taskPanel-'+items).remove();
        });