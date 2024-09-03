import { initState } from './questionnaire.reducers';
import * as questionnaireSelector from './questionnaire.selector';

describe('questionnaireSelector', () => {
  const state = {
    questionnaire: initState,
  };

  describe('pageSelector', () => {
    it('should return the value of page from state', () => {
      const pageSelectorState = questionnaireSelector.pageSelector(state);
      expect(pageSelectorState).toBeDefined();
    });
  });
});
