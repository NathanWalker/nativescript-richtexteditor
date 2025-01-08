import { computed, Directive, input } from "@angular/core";

@Directive({
  selector: "[icon]",
  host: {
    "[class]": "iconData().className",
    "[text]": "iconData().iconName",
  },
})
export class IconDirective {
  text = input<any>();
  icon = input<string>();

  iconData = computed(() => {
    const icon$ = this.icon();
    if (!icon$) {
      return { className: "", iconName: this.text() };
    }

    const [icon, modifiers] = icon$.split(":") ?? [];
    let [classNameOrIconName, iconName] = icon?.split(".") ?? [];
    // default to mds if no class is provided
    if (!iconName) {
      iconName = classNameOrIconName;
      classNameOrIconName = "mds";
    }

    // allow for additional classes to be added - useful when some icons need to be styled differently (e.g. solid)
    if (modifiers) {
      classNameOrIconName += ` ${modifiers}`;
    }

    return { className: classNameOrIconName, iconName };
  });
}
