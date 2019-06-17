function exibeHint(elemento) {
    let id = String(elemento.getAttribute("id"));
    let popper = $('#popper' + id[id.length -1]);
    $( popper ).removeClass( "esconde" );
    $( popper ).removeClass( "transicaoHintBarEsconder" );
    $( popper ).addClass( "transicaoHintBarExibir" );
}
function escondeHint(elemento) {
  let id = String(elemento.getAttribute("id"));
  let popper = $('#popper' + id[id.length -1]);
  $( popper ).removeClass( "transicaoHintBarExibir" );
  $( popper ).addClass('transicaoHintBarEsconder');
  setTimeout(function(){
        $( popper ).addClass( "esconde" );
    }, 1000);
}

function sucesso() {
  Swal.fire({
    type: 'success',
    position: 'center',
    title: 'Gravado com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
}

function confirmarExclusao() {
  Swal.fire({
  title: 'Confirmar exclusão?',
  text: "O respectivo conteudo será deletado!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Deletar!'
}).then((resultado) => {
  if (resultado.value) {
    Swal.fire(
      'Deletado!',
      'O conteudo foi deletado com sucesso.',
      'success'
    )
  }
})
}
