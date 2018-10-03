import ISvc from '../../interfaces/ISvc';


export default class Svc implements ISvc {

  private vm: any;

  constructor(vm: any) {
    this.vm = vm;
  }

  public service(opt: any): string {
  const {svc} = opt;
  switch (svc) {
    case 't1':
      this.vm.msg = 't1';
      return 't1';
    case 't2':
      this.vm.msg = 't2';
      return 't2';
    default:
      return '';
    }

  }
}
