import Image from "next/image";
import Message from "./Message";
import MessageBar from "./MessageBar";
export default function Room() {
  return (
    <div>
      <h1>Room</h1>

      <div className="flex flex-col">
        {/*messages*/}
        <Message
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum tortor tellus, vel tristique leo ultrices sed. Aliquam et malesuada ante, quis tristique arcu. Etiam ultrices est metus. Vivamus ligula purus, fringilla at elementum sed, dignissim sodales eros. Curabitur sem ipsum, dapibus quis tempor nec, molestie sed risus. Suspendisse sit amet lacinia urna. Curabitur eu lacus vel dolor laoreet interdum eget at tortor. Aenean cursus vulputate magna nec pretium. Cras eu aliquet ante. Praesent consequat felis diam, eu imperdiet nulla volutpat in. Etiam dictum dolor sit amet erat malesuada vehicula. Integer auctor nec ex tempor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper venenatis ultrices. Curabitur sapien mauris, sodales quis aliquam et, lobortis at massa. Vivamus in feugiat lectus.

Proin quam ligula, laoreet sit amet tristique sit amet, iaculis sit amet nunc. Donec gravida, arcu in auctor hendrerit, erat tortor finibus urna, ac sodales arcu est non ex. Quisque congue nunc diam, in tincidunt mauris congue vitae. Maecenas commodo eleifend hendrerit. Phasellus lorem nibh, pellentesque auctor orci at, consectetur pharetra nulla. Proin ut lectus mollis turpis placerat interdum eget lobortis ante. Etiam luctus tellus velit, et bibendum mauris viverra placerat. Sed mollis mollis diam laoreet luctus. Integer tempor magna sagittis velit condimentum sodales. Phasellus condimentum hendrerit risus, ut scelerisque ligula.

Nunc justo tellus, posuere vitae orci ut, cursus imperdiet diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet justo neque. Mauris maximus aliquam ipsum blandit laoreet. Maecenas interdum feugiat massa vel sollicitudin. Duis ultrices volutpat ligula, at tempor lectus aliquet auctor. Sed finibus ac urna vitae efficitur.

Phasellus pharetra enim sit amet velit ultrices congue vitae eget nisl. Aliquam venenatis varius fringilla. Aliquam dapibus vitae velit sit amet viverra. Cras ac tortor eleifend, gravida urna in, consectetur mauris. Maecenas et leo a magna elementum ultrices. Vivamus eu varius tortor. Duis viverra libero vitae porttitor tristique. Nunc pharetra ultrices iaculis. Duis in imperdiet nulla. Quisque eu sem maximus, hendrerit ex nec, tincidunt ligula. Maecenas convallis, arcu ut volutpat mattis, augue nibh commodo turpis, vel feugiat urna massa a velit. Nulla euismod, massa in condimentum luctus, eros turpis rutrum ex, ac aliquam est sapien id velit. Curabitur pellentesque vel mi a vulputate. Pellentesque elit dui, lobortis id tristique ac, bibendum ac odio. Aliquam sem eros, semper a diam a, dictum egestas massa. Duis vel convallis nisl, sit amet ultrices elit.

Nam et arcu eget risus tincidunt gravida vitae sit amet velit. Proin congue imperdiet nibh, sed fermentum lacus blandit vitae. Sed ac libero sit amet odio sagittis sollicitudin. Vestibulum scelerisque lobortis tortor. Praesent arcu tortor, blandit ut orci eu, ultrices efficitur ex. Aenean consectetur a velit sed suscipit. Nam aliquet turpis a tempor sagittis. Maecenas rutrum sollicitudin pulvinar. Ut ac metus ante."
          author="simon greenwood"
        />
      </div>

      <MessageBar />
    </div>
  );
}
