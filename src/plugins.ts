import Maska from "maska";
import vCalendar from "v-calendar";
import { App } from "vue";

export default function definePlugins(app: App): App {
  app.use(Maska);
  app.use(vCalendar);
  return app;
}
