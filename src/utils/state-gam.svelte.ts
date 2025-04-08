export type GAMStateProps = typeof gamState.state;

class GAMState {
  state = $state<{
    params: Record<string, unknown>;
    custParams: Record<string, unknown>;
  }>({
    params: {},
    custParams: {},
  });

  updateState = ({ params, custParams }: GAMStateProps) => {
    this.state.params = {};
    Object.entries(params ?? {}).forEach(([key, value]) => {
      this.state.params[key] = value;
    });

    this.state.custParams = {};
    Object.entries(custParams ?? {}).forEach(([key, value]) => {
      this.state.custParams[key] = value;
    });
  };
}

export const gamState = new GAMState();
