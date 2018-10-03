export default {
  methods: {
    linkSvc(opt: any) {
      console.log(opt);
      const vm: any = this;
      vm.svc.service( opt );
    },
  },
};
