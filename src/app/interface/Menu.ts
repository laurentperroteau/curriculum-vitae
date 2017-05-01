export interface Menu {
  title: string,
  tree : {
    children: MenuItem[]
  }
}

export interface MenuItem {
  children?: MenuItem[],
  fullPath : string,
  isFolder : boolean,
  name     : string
}
