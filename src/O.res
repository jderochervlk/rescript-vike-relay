let map2 = (a, b, fn) =>
  switch (a, b) {
  | (Some(a), Some(b)) => Some(fn(a, b))
  | _ => None
  }
