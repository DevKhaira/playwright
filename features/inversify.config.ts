import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../types';

// interfaces
import { ISandbox } from '../interfaces/sandbox';

// implementations
import { Sandbox } from '../features/support/sandbox/sandbox';

const ioc = new Container();

ioc.bind<ISandbox>(TYPES.Sandbox).to(Sandbox);

export { ioc };