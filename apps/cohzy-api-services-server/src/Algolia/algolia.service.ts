import { Injectable } from "@nestjs/common";
import { AlgoliaInputDto } from "../algolia/AlgoliaInputDto";

@Injectable()
export class AlgoliaService {
  constructor() {}
  async SendDataToAlgolia(args: AlgoliaInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
