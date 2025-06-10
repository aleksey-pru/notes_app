export type TFunction<ReturnType = void> = () => ReturnType;

export type TFunctionWithArgs<TArgument = undefined, ReturnType = void> = (
  arg: TArgument
) => ReturnType;
