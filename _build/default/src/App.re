[@react.component]
let make = () => {
  open ReactBinding;
  let lazyHome =
    React.createElement(
      Lazy.lazy_(() =>
        Lazy.import_("./pages/Home.js")
        ->Js.Promise.then_(
            comp => Js.Promise.resolve({"default": comp##make}),
            _,
          )
      ),
      (),
    );

  let lazyAbout =
    React.createElement(
      Lazy.lazy_(() =>
        Lazy.import_("./pages/About.js")
        ->Js.Promise.then_(
            comp => Js.Promise.resolve({"default": comp##make}),
            _,
          )
      ),
      (),
    );

  let url = RescriptReactRouter.useUrl();
  let component =
    switch (url.path) {
    | [] =>  <SuspensionLoader> lazyHome </SuspensionLoader>
    | ["about"] => <SuspensionLoader> lazyAbout </SuspensionLoader>
    | _ => <div />
    };

  <div className="flex flex-col"> component </div>;
};
