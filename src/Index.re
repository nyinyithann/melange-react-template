%raw
{|import "../style/main.css"|};

ReactDOM.querySelector("#root")
->(
    fun
    | Some(rootElm) => {
        let root = ReactBinding.createRoot(rootElm);
        ReactBinding.Root.render(
          root,
          <React.StrictMode> <App /> </React.StrictMode>,
        );
      }
    | None =>
      Js.Console.error(
        "Failed to start React: couldn't find the #root element",
      )
  );
