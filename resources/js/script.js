





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
