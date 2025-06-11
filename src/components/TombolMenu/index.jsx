export default function TombolMenu ({to, text}) {
  return (
          <a className="menuHome" href={to}>
        <i
          class="fa fa-gamepad"
          aria-hidden="true"></i>
        {text}
      </a>
    )
}