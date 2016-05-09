export default () => {
  return (input) => {
    return input + ' <a href="mailto:' + input + '"><i class="fa fa-reply" aria-hidden="true"></i></a>';
  }
}
