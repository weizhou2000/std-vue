import { expect } from 'chai';
import Svc from '@/views/about/svc';
import ISvc from '@/interfaces/ISvc';

describe('about svc', () => {
  it('service t1', () => {
    const svc: ISvc = new Svc({});
    const rs = svc.service({svc: 't1'});
    expect(rs).to.equals('t1');
  });

  it('service t2', () => {
    const svc: ISvc = new Svc({});
    const rs = svc.service({svc: 't2'});
    expect(rs).to.equals('t2');
  });

});
