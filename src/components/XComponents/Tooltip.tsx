import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(-1);

  const messages = [
    "Hola Compañero!!",
    "¿Todavía aquí?",
    "¡Hola de nuevo!",
    "¡Eres muy curioso!",
    "¡No más clics!",
    "¡Eres persistente!",
    "¡Dale un descanso!",
    "Ya no te dire nada...",
    "...",
    "...",
    "...",
    "¡¿En serio?!",
    "Acaso ¿Hablas Ingles?",
    "Aun no se ingles",
    "Habla con mi creado",
    "¿Por qué tanta curiosidad?",
    "¡Encuentra otra afición!",
    "¡Por favor, detente!",
    "¡Eso es todo, me rindo!",
  ];

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-28 mt-1 w-auto max-h-[70px] p-2 bg-black/20 text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal">
          <p class="w-max select-none">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
