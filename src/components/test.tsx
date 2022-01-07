import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: String,
  },
  setup(props, { slots, emit }) {
    const onClick = () => {
      emit('onTest', 'on test');
    };
    return () => (
      <div class="test" onClick={onClick}>
        <p>{props.message}</p>
        <p>
          {slots.title?.() ?? (
            <span>112312312312312312312312312312312312312312312312312323</span>
          )}
        </p>
        {slots.default?.()}
      </div>
    );
  },
});
